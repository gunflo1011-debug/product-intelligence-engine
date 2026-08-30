import fs from 'node:fs';
const products=JSON.parse(fs.readFileSync('data/products.json','utf8'));
const offers=JSON.parse(fs.readFileSync('data/offers.json','utf8'));
const history=JSON.parse(fs.readFileSync('data/offer-history.json','utf8'));
const ids=new Set(products.map(p=>p.id));
const errors=[];
for(const o of offers){
  if(!ids.has(o.product_id)) errors.push(`offer references missing product: ${o.product_id}`);
  for(const k of ['merchant','market','currency','url','observed_at','fresh_until','availability','source_type','affiliate_status']) if(o[k]==null||o[k]==='') errors.push(`${o.product_id}: missing ${k}`);
  if(o.price!=null && (!Number.isFinite(o.price)||o.price<0)) errors.push(`${o.product_id}: invalid price`);
  if(o.fresh_until<o.observed_at) errors.push(`${o.product_id}: fresh_until before observed_at`);
}
for(const h of history){if(!ids.has(h.product_id)) errors.push(`history references missing product: ${h.product_id}`)}
const duplicateKeys=offers.map(o=>`${o.product_id}|${o.merchant}|${o.market}`);if(new Set(duplicateKeys).size!==duplicateKeys.length) errors.push('duplicate current offer key');
const today=new Date().toISOString().slice(0,10);const stale=offers.filter(o=>o.fresh_until<today).map(o=>o.product_id);const unavailable=offers.filter(o=>o.availability==='out_of_stock').map(o=>o.product_id);
console.log(JSON.stringify({products:products.length,current_offers:offers.length,history_snapshots:history.length,stale_offers:stale,out_of_stock:unavailable,errors},null,2));
if(errors.length) process.exit(1);

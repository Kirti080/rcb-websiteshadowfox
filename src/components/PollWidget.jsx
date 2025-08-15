import React from 'react';
export default function PollWidget(){ const [v,setV]=React.useState({k:0}); return (
  <div className="card" data-aos="zoom-in"><h3>Who will be MOM?</h3><div style={{display:'flex',gap:10,marginTop:10}}><button className="cta" onClick={()=>setV(s=>({...s,k:s.k+1}))}>Vote ({v.k})</button></div></div>
);}
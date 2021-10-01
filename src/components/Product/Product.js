import React, { useState } from 'react';
export default function Product() {
return(
<div className="wrapper">
<div className="product"> <span>tomato</span></div>
<button>Add</button> <button>Remove</button>
<div>Number of items: 0 </div>
<div>Total: 0</div>
</div>
)
}
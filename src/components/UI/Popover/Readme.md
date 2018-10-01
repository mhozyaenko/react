```jsx harmony
<div style = {{height: '100px'}}>
<Popover

renderTitle={()=>{
    return <strong>Hover me!</strong>
}}>
{()=> {
   return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi corporis modi tempora. Autem delectus facere non, praesentium quaerat sunt!</p>
}}
</Popover>
</div>
```
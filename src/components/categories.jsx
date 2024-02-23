import "../styles/categories.css"

const Categories = () => {
    let Links=[
        {category:"All"},
        {category:"Games"},
        {category:"Music"},
        {category:"News"},
        {category:"Sports"},
        {category:"Comedy"},
        {category:"Tv Shows"},
        {category:"Movies"},
        {category:"Kids"},
        {category:"Cricket"},
        {category:"Shows"},
      ]
    return ( 
        <div className="Categories">
            <div className="Categories_link">
             
                {Links.map((Data) =>(
                       <a href="">{Data.category}</a>

                ))}
        </div>
        </div>
     );
}
 
export default Categories;
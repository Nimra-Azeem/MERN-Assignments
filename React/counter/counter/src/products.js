let list=[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  export const SearchDiv = () => {
    return(
    <form> 
        <input type = "checkbox"/>
        <input type ="search" name="searchBox" placeholder="Search..."/>
    </form>)
  } 
  export const ShowHeader = ({Name}) =>{
    return(
        <tr>
            <th>{Name}</th>
        </tr>
    )
  }
  export const ShowItems = ({List}) =>{
    return(
        List.forEach(element => {
            <tr>
                <td>{element.name}</td>
            </tr>
        })
    )
  }

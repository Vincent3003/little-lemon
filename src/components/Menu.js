import React from "react";
import recipe from "../components/Recipe"
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder = (id) =>{
        console.log(id, <br>Your order has been placed!</br>);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success"
              });
            }
          });
    }
    
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This weeks specials!</h2>

                <Link to="/Meta-Capstone-Project/order-online">
                    <button>Online Menu</button>
                </Link>
            </div>
            
            <div className="menu-cards">
                {
                    recipe.map(recipe => <div key = {recipe.id} className="menu-items">
                        <img src={recipe.image} alt=''/>
                        <div>
                            <div>
                                <h4>{recipe.image}</h4>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.desciption}</p>
                            <button className="orderButton" onClick={() => handleOrder(recipe.id)}> Order a Delivery</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default Menu;
import { Container } from "./styles";
import {  api } from "../../services/api";
import { useEffect, useState } from "react";

export function Product() {

  const [products, setProducts] = useState();

  useEffect(() => {
    api.get("/products")
    .then(response => setProducts(response.data))
  },[])

  return (
    <Container>
    {products != undefined &&
      <section>
        <div className="container-product">
        <div>
          <img src={products[0]?.img} alt="" />
        </div>
        <div>
        
        </div>
        </div>
      </section>
      }
    </Container>
  )
}

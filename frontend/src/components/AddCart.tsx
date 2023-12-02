import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createOrderData, showIdData } from "../services/apiService";
import { orderType } from "../types/productType";
import { Box, Button, Container, TextField } from "@mui/material";

const AddCart = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<orderType>({
    productId: "",
    name: "",
    quantity: 0,
  });

  const [order, setOrder] = useState<orderType>({
    productId: "",
    name: "",
    quantity: 0,
  });

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        const result = await showIdData(id);
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(id);
  }, [id]);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setOrder((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(order);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(order);
    try {
      const result = await createOrderData(order);
      console.log("Data Created", result);
      navigate("/add");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="productId"
          defaultValue={product.productId}
          onChange={handleChange}
        />
        <TextField
          name="name"
          devaultValue={product.name}
          onChange={handleChange}
        />
        <TextField
          name="quantity"
          defaultValue={product.quantity}
          onChange={handleChange}
        />
        <Button type="submit" varaint="contained">
          ADD
        </Button>
      </Box>
    </Container>
  );
};

export default AddCart;

import { Container, Box, TextField, Button } from "@mui/material";
import { productType } from "../types/productType";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createData, showIdData, updateData } from "../services/apiService";
import List from "./List";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<productType>({
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
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await updateData(id, product);
      navigate("/admin");
      console.log("Data Created", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Box component="form" onSubmit={handleUpdate}>
          <TextField
            name="productId"
            value={product.productId}
            onChange={handleChange}
          />
          <TextField name="name" value={product.name} onChange={handleChange} />
          <TextField
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            UPDATE
          </Button>
        </Box>
      </Container>
      <List />
    </>
  );
};
export default Update;

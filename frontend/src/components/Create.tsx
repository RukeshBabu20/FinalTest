import { Container, Box, TextField, Button } from "@mui/material";
import { productType } from "../types/productType";
import { ChangeEvent, FormEvent, useState } from "react";
import { createData } from "../services/apiService";
import List from "./List";

const Create = () => {
  const [product, setProduct] = useState<productType>({
    productId: "",
    name: "",
    quantity: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (product.productId.trim() === "") {
      newErrors.productId = "ID is required in format(example: SAM12345)";
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, productId: "" }));
      }, 3000);
      isValid = false;
    }
    if (product.name.trim() === "") {
      newErrors.name = "Product Name is required";
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }, 3000);
      isValid = false;
    }
    if (product.quantity === 0) {
      newErrors.quantity = "Quantity is required";
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, quantity: "" }));
      }, 3000);
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  console.log(errors);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(product);

    if (validateForm()) {
      try {
        const result = await createData(product);
        console.log("Data Created", result);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("validation failed");
    }
  };

  return (
    <>
      <Container>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField name="productId" onChange={handleChange} />
          {errors.name && <p className="error">{errors.productId}</p>}
          <TextField name="name" onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
          <TextField type="number" name="quantity" onChange={handleChange} />
          {errors.name && <p className="error">{errors.quantity}</p>}
          <Button type="submit" variant="contained">
            ADD
          </Button>
        </Box>
      </Container>
      <br />
      <List />
    </>
  );
};
export default Create;

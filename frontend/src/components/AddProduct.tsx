import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { orderType } from "../types/productType";
import { createOrderData } from "../services/apiService";

const AddProduct = () => {
  const [product, setProduct] = useState<orderType[]>([
    {
      name: "",
      quantity: 0,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.showData();
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(product);

  return (
    <>
      <div className="cart">
        <Button href="/cart" variant="contained">
          CART
        </Button>
      </div>
      <Typography>ADD PRODUCT</Typography>
      <Box component="form">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((prod) => (
                <TableRow>
                  <TableCell>
                    <TextField
                      name="name"
                      onChange={handleChange}
                      value={prod.name}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="quantity"
                      onChange={handleChange}
                      value={prod.quantity}
                    />
                  </TableCell>
                  <TableCell>
                    <Button href={`addCart/${prod._id}`} variant="contained">
                      ADD
                    </Button>
                    <Button variant="contained">DELETE</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default AddProduct;

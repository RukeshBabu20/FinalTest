import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  Paper,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { orderType } from "../types/productType";

const Cart = () => {
  const [product, setProduct] = useState<orderType[]>([
    {
      productId: "",
      name: "",
      quantity: 0,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.showOrderData();
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Typography>My Cart</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((prod) => (
              <TableRow>
                <TableCell>{prod.name}</TableCell>
                <TableCell>{prod.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Cart;

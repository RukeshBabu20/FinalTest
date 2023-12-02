import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { productType } from "../types/productType";

const List = () => {
  const [product, setProduct] = useState<productType[]>([
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
        const result = await api.showData();
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const result = await api.deleteData(id);
      setProduct(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((prod) => (
              <TableRow>
                <TableCell>{prod.productId}</TableCell>
                <TableCell>{prod.name}</TableCell>
                <TableCell>{prod.quantity}</TableCell>
                <TableCell>
                  <Button variant="contained" href={`/update/${prod._id}`}>
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      handleDelete(prod._id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default List;

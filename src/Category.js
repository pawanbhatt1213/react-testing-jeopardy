import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { setCategories, setSelectedCategory } from "./actions";

export default function Category() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        const requestCategories = async () => {
            const res = await fetch("http://jservice.io/api/categories?count=20");
            const data = await res.json();
            dispatch(setCategories(data));
        }
        requestCategories();
    }, []);

    return (
    <Container>
        <h3 className="text-center mt-5">Please Select a category for Quiz!</h3>
        { 
        categories.map(category => {
            return (
                <Link to="/categoryDetails" key={category.id} onClick={()=>dispatch(setSelectedCategory(category.id))}>
                    <Card className="my-2" body>
                        {category.title}
                    </Card>
                </Link>
            )
        })
        }
    </Container>
    );
}

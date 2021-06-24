import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import DetailCard from "./DetailCard";

export default function CategoryDetail() {
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const [categoryDetails, setCategoryDetails] = useState(null)

    useEffect(() => {
        const fetchCategoryData = async (selectedCategory) => {
            const res = await fetch(`http://jservice.io/api/clues?category=${selectedCategory}`);
            const data = await res.json();
            setCategoryDetails(data)
        }
        fetchCategoryData(selectedCategory);
    }, [selectedCategory])

    const renderDetails = () => {
        return categoryDetails ? categoryDetails.map( row => <DetailCard row={row} />) : "Loading....";
    }

    return (
        <>
            <h5><Link to="/" className="ml-5"><b>&larr;</b> Back To Categories</Link></h5>
            <h2 className="text-center">Here are all the questions.</h2>
            <Container>            
                {renderDetails()}
            </Container>
        </>
    )
}

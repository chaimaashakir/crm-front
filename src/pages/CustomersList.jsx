import { useEffect, useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";
import { HiMiniUserPlus } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


function CustomersList() {
    const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    async function fetchCustomers() {
        try {
            const response = await fetch(
                "http://localhost:5000/customers"
            );

            const data = await response.json();

            setCustomers(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (


        <div className="container"
            style={{
                marginRight: "15px",
                width: "82%",
                background: "rgb(247, 248, 250)"
            }}   >

            <div className="d-flex justify-content-between align-items-center mb-3" style={{ width: "990px", }}>
                <h5>Customers</h5>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{ padding: "7px" }}>
                    <button class="btn btn-light" style={{ background: "white" }}> <HiArrowDownTray /> Export </button>
                    <button class="btn btn-primary"
                        onClick={() => navigate("/customers/add")}
                    >
                        <HiMiniUserPlus /> Add Customers</button>
                </div>
            </div>

            <div
                className="bg-white border rounded p-3 mb-3"
                style={{ width: "990px" }}
            >
                <div className="row align-items-center">

                    <div className="col-md-6">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, company or email..."
                        />
                    </div>

                    <div className="col-md-3">
                        <select className="form-select">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Pending</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div className="col-md-3 text-end">
                        Showing {customers.length} customers
                    </div>

                </div>
            </div>

            <table class="table border" style={{ marginTop: "20px" }} >
                <thead class="table-light">
                    <tr>
                        <th> FULLNAME </th>
                        <th>COMPANYNAME</th>
                        <th>EMEIL</th>
                        <th>PHONE</th>
                         <th>CITY</th>
                        <th>COUNTRY</th>
                        <th>CUSTOMERSTATUS</th>
                        <th>CREATED DATE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.fullName}</td>
                            <td>{customer.companyName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.city}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.country}</td>
                            <td>{customer.customerStatus}</td>

                            <td></td>
                            <td>
                                <button className="btn btn-sm">
                                    <FaEye />
                                </button>

                                <button className="btn btn-sm">
                                    <FaPen />
                                </button>

                                <button className="btn btn-sm">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>
            {customers.map((customer) => (
                <div key={customer.id}></div>
            ))}

        </div>
    );
}

export default CustomersList;
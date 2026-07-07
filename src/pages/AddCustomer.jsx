import { FaIdCardAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function AddCustomer() {

    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        website: "",
        industry: "",
        address: "",
        city: "",
        country: "",
        customerstatus: "",
        notes: "",

    })

    function validateForm() {
        if (formData.fullName === "") { 

            alert("Full Name is required.");
            return false;
        }
        return true;
    }


    async function saveCustomer() {

        const isValid = validateForm();

        if(!isValid) {
            return;
        }
        

        const response = await fetch(
            "http://localhost:5000/customers",
            {
                method:"post",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(formData)
            }
        );
        if (response.ok){
            Navigate("/customers");
        }
    }
    return (
        <div className="container"
            style={{
                marginRight: "15px",
                width: "82%",
                background: "rgb(247, 248, 250)"
            }}  >

            <div className="d-flex justify-content-between align-items-center mb-3" style={{ width: "990px", }}>
                <div className="px-4 py-3 ">
                    <h5 className="fw-bold mb-1">Customers</h5>
                    <p className="text-muted mb-0">Add a new organization or contact to your CRM database.</p>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{ padding: "7px" }}>
                    <button class="btn btn-light" style={{ background: "white" }}> Cancel </button>
                    <button
                    onClick={saveCustomer}
                    class="btn btn-primary"> Save Customers</button>
                </div>
            </div>
            <div class="card mt-4" >
                <div class="card-header">
                    <h3> <FaIdCardAlt /> Basic Information</h3>
                </div>
                <div className="card-body" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px"
                }}>
                    <div>
                        <label>Full Name *</label>
                        <br />
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({
                                ...formData,
                                fullName: e.target.value
                            })
                            }
                            placeholder="e.g. John Doe"
                            style={{ width: "440px" }}

                        />

                    </div>
                    <div>
                        <label>Company Name *</label>
                        <br />
                        <input type="text"

                            value={formData.companyName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    companyName: e.target.value
                                })
                            }
                            placeholder="e.g. Acme Corp" style={{ width: "440px" }} />
                    </div>
                    <div>
                        <label> Email Address *</label>
                        <br />

                        <input type="email"

                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }
                            placeholder="john@company.com" style={{ width: "440px" }} />
                    </div>
                    <div>
                        <label>Phone Number *</label>
                        <br />
                        <input type="number"
                            value={formData.phone}
                            onChange={(e) => setFormData({
                                ...formData,
                                phone: e.target.value
                            })
                            }
                            placeholder="+1 (555) 000-0000" style={{ width: "440px" }} />
                    </div>

                    <div>
                        <label>Website URL *</label>
                        <br />
                        <input
                            style={{ width: "440px" }}
                            type="text"
                            type="text"
                            value={formData.website}
                            onChange={(e) => setFormData({
                                ...formData,
                                website: e.target.value
                            })
                            }
                            placeholder="https://www.example.com"
                        />
                    </div>
                    <div>
                        <label>Industry *</label>
                        <br />
                        <select
                            value={formData.industry}
                            onChange={(e) => setFormData({
                                ...formData,
                                industry: e.target.value
                            })
                            }
                            style={{ width: "440px" }}>
                            <option>Select Industry</option>
                        </select>
                    </div>
                </div>
            </div >


            <div className="card mt-4">
                <div className="card-header" >
                    <h5><CiLocationOn /> Location</h5>
                </div>
                <div className="card-body">
                    <div >
                        <label>Street Address *</label>
                        <br />
                        <input

                            value={formData.address}
                            onChange={(e) => setFormData({
                                ...formData,
                                address: e.target.value
                            })
                            }
                            type="text" placeholder="123 Business way, Suite 400" style={{ width: "99%" }} />
                    </div>
                    <div class="d-flex justify-content-around mt-4">
                        <div >
                            <label>city *</label>
                            <br />
                            <input type="text"
                                value={formData.city}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    city: e.target.value
                                })
                                }
                                placeholder="San Francisco" style={{ width: "250px" }} />
                        </div>





                        <div>
                            <label > Country *</label>
                            <br />
                            <select
                                value={formData.country}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    country: e.target.value
                                })
                                }
                                style={{ width: "250px" }} >
                                <option>United States</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    <h5>  <FiAlignRight /> Classification & Notes</h5>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">
                            Customer Status *
                        </label>

                        <select
                            value={formData.customerStatus}
                            onChange={(e) => setFormData({
                                ...formData,
                                customerStatus: e.target.value
                            })
                            }
                            className="form-select">
                            <option>Active Customer</option>
                            <option>Prospect</option>
                            <option>Inactive</option>
                        </select>
                    </div> <div>
                        <label className="form-label">
                            Internal Notes
                        </label>
                        <textarea
                            type="text"
                            value={formData.notes}
                            onChange={(e) => setFormData({
                                ...formData,
                                notes: e.target.value
                            })
                            }
                            className="form-control"
                            rows="4"
                            placeholder="Enter any specific details about this client..."
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
                <button className="btn btn-light">
                    Cancel
                </button>

                <button className="btn btn-outline-primary">
                    Save & Create Another
                </button>

                <button
                 onClick={saveCustomer}
                className="btn btn-primary">
                    Save Customer
                </button>
            </div>
        </div>
    );
}

export default AddCustomer;

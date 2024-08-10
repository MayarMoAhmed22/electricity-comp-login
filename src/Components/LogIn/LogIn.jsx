import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export default function LogIn() {
  const [role, setRole] = useState("");
  const [sectorVisible, setSectorVisible] = useState(true);
  const [branchVisible, setBranchVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (["النائب التجارى", "الأدمن", "الحسابات الألية"].includes(role)) {
      setSectorVisible(false);
      setBranchVisible(false);
    } else {
      setSectorVisible(true);
      setBranchVisible(true);
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !role ||
      (sectorVisible && !userName) ||
      (branchVisible && !userName) ||
      !password
    ) {
      setErrorMessage("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    // Validate the password
    if (password !== "correct-password") {
      setErrorMessage("كلمة المرور غير صحيحة");
      return;
    }

    setErrorMessage("");
    alert("تم تسجيل الدخول بنجاح!");
    navigate("/home"); 
  };

  const handleReset = () => {
    // Reload the page to reset the form
    window.location.reload();
  };

  const handleCancel = () => {
    localStorage.clear();
    sessionStorage.clear();


    navigate("/home");
  };

  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <h2 className="text-center mb-4">برنامج التقديرات والتسويات</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              {/* Role Selection */}
              <Form.Group
                controlId="formOption1"
                className="mb-3 position-relative"
              >
                <Form.Label>اختار الصلاحية</Form.Label>
                <Form.Control
                  as="select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="select-with-icon"
                >
                  <option value="">Select an option</option>
                  <option value="النائب التجارى">النائب التجارى</option>
                  <option value="رئيس قطاع">رئيس قطاع</option>
                  <option value="فرع تجارى">فرع تجارى</option>
                  <option value="الحسابات الألية">الحسابات الألية</option>
                  <option value="الأدمن">الأدمن</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
              </Form.Group>

              {/* Sector Selection */}
              {sectorVisible && (
                <Form.Group
                  controlId="formOption2"
                  className="mb-3 position-relative"
                >
                  <Form.Label>اختار القطاع</Form.Label>
                  <Form.Control
                    as="select"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="select-with-icon"
                  >
                    <option value="">Select an option</option>
                    <option value="ساحل">ساحل</option>
                    <option value="شرق">شرق</option>
                    <option value="المنتزة">المنتزة</option>
                    <option value="وسط">وسط</option>
                    <option value="غرب">غرب</option>
                  </Form.Control>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="select-icon"
                  />
                </Form.Group>
              )}

              {/* Branch Selection */}
              {branchVisible && (
                <Form.Group
                  controlId="formOption3"
                  className="mb-3 position-relative"
                >
                  <Form.Label>اختار الفرع</Form.Label>
                  <Form.Control
                    as="select"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="select-with-icon"
                  >
                    <option value="">Select an option</option>
                    <option value="السيوف">السيوف</option>
                    <option value="النصر">النصر</option>
                    <option value="سيدى بشر">سيدى بشر</option>
                    <option value="الإبراهيمية">الإبراهيمية</option>
                    <option value="سابا باشا">سابا باشا</option>
                    <option value="محرم بك">محرم بك</option>
                    <option value="وسط المدينة">وسط المدينة</option>
                    <option value="الدخيلة">الدخيلة</option>
                    <option value="القبارى">القبارى</option>
                    <option value="العامريه">العامريه</option>
                    <option value="باكوس">باكوس</option>
                    <option value="الهانوفيل">الهانوفيل</option>
                    <option value="المندرة">المندرة</option>
                    <option value="سموحة">سموحة</option>
                    <option value="برج العرب الجديد">برج العرب الجديد</option>
                    <option value="بيانكى">بيانكى</option>
                    <option value="البيطاش">البيطاش</option>
                    <option value="أبو قير">أبو قير</option>
                    <option value="أبيس">أبيس</option>
                    <option value="مرغم">مرغم</option>
                    <option value="برج العرب القديم">برج العرب القديم</option>
                    <option value="الساحل الشمالى">الساحل الشمالى</option>
                    <option value="الجلاء">الجلاء</option>
                    <option value="السادس من أكتوبر">السادس من أكتوبر</option>
                    <option value="الحمام">الحمام</option>
                    <option value="الرأس السوداء">الرأس السوداء</option>
                    <option value="خورشيد البحرية">خورشيد البحرية</option>
                  </Form.Control>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="select-icon"
                  />
                </Form.Group>
              )}

              {/* Username Selection */}
              <Form.Group
                controlId="formOption4"
                className="mb-3 position-relative"
              >
                <Form.Label>اختار اسم المستخدم</Form.Label>
                <Form.Control
                  as="select"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="select-with-icon"
                >
                  <option value="">Select an option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row justify-content-between">
                <div>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleCancel}
                    className="mb-2 mb-sm-0 me-sm-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="warning"
                    type="button"
                    onClick={handleReset}
                    className="mb-2 mb-sm-0"
                  >
                    Reset
                  </Button>
                </div>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ marginTop: "40px", padding: "20px", textAlign: "center", boxShadow: "0 -2px 6px rgba(0,0,0,0.1)" }}>
      <h3>MyShop</h3>
      <p style={{ margin: "10px 0" }}>Your trusted e-commerce store</p>
      <p style={{ fontSize: "14px", color: "gray" }}>
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </p>
    </footer>
  );
}

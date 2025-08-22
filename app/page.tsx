export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🍔 Food Delivery App
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        Order your favorite meals and get them delivered fast today! hehehe
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {[
          { name: "Pizza", price: "$10", img: "https://via.placeholder.com/150?text=Pizza" },
          { name: "Burger", price: "$8", img: "https://via.placeholder.com/150?text=Burger" },
          { name: "Sushi", price: "$15", img: "https://via.placeholder.com/150?text=Sushi" },
        ].map((food) => (
          <div
            key={food.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img src={food.img} alt={food.name} style={{ borderRadius: "8px", marginBottom: "0.5rem" }} />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{food.name}</h2>
            <p>{food.price}</p>
            <button
              style={{
                marginTop: "0.5rem",
                background: "#ff5722",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

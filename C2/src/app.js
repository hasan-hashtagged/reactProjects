const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );    
}

function ProductTable({ products }) {
    let rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (lastCategory != product.category) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search Product..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show stocked products.
            </label>
        </form>
    );
}

function FilterableProducts({ products }) {
    return (
        <>
            <SearchBar />
            <ProductTable
                products={products}
            />
        </>
    );
}

export default function App() {
    return <FilterableProducts products={PRODUCTS} />
}
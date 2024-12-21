import { useState } from "react";

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

function ProductTable({ products, filterText, inStock }) {
    let rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1 
        ) {
            return;
        }

        if (inStock && !product.stocked) {
            return
        }

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

function SearchBar({ filterText, inStock, onFilterTextChange, onStockOptionChange }) {
    return (
        <form>
            <input 
                type="text"
                value={filterText} 
                placeholder="Search Product..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input 
                    type="checkbox" 
                    checked={inStock}
                    onChange={(e) => onStockOptionChange(e.target.checked)} />
                {' '}
                Only show stocked products.
            </label>
        </form>
    );
}

function FilterableProducts({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStock, setInStock] = useState(false);
    return (
        <>
            <SearchBar 
                filterText={filterText}
                inStock={inStock} 
                onFilterTextChange={setFilterText} 
                onStockOptionChange={setInStock} />
            <ProductTable
                products={products} 
                filterText={filterText}
                inStock={inStock} />
        </>
    );
}

export default function App() {
    return <FilterableProducts products={PRODUCTS} />
}


import ProductsBL from "./ProductsBL";
import "../../assets/css/buyer.css";
// import { Dropdown } from 'semantic-ui-react'
function Products() {
	const { user, getProducts, loading, error } = ProductsBL();
	console.log(getProducts);
	// const DropdownExampleDropdown = () => (
	// 	<Dropdown text='File'>
	// 	  <Dropdown.Menu>
	// 		<Dropdown.Item text='New' />
	// 		<Dropdown.Item text='Open...' description='ctrl + o' />
	// 		<Dropdown.Item text='Save as...' description='ctrl + s' />
	// 		<Dropdown.Item text='Rename' description='ctrl + r' />
	// 		<Dropdown.Item text='Make a copy' />
	// 		<Dropdown.Item icon='folder' text='Move to folder' />
	// 		<Dropdown.Item icon='trash' text='Move to trash' />
	// 		<Dropdown.Divider />
	// 		<Dropdown.Item text='Download As...' />
	// 		<Dropdown.Item text='Publish To Web' />
	// 		<Dropdown.Item text='E-mail Collaborators' />
	// 	  </Dropdown.Menu>
	// 	</Dropdown>
	//   )
	return (
		<div className="product-layout">
				<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
			

			<div className="product-display">
				{loading ? <div>Loading Products...</div> : null}
				{error ? <div>Error!! Products...</div> : null}
				{getProducts &&
					getProducts.getProducts.map((item) => {
						return (
							<ProductItem
								key={item.id}
								image={item.imageURL}
								name={item.name}
								price={item.price}
							/>
						);
					})}
			</div>
		</div>
	);
}

function ProductItem({ image, name, price }) {
	return (
		<div className="product">
			{/* <center> */}
				<img src={image} alt={name} height="150px" width="160px;"></img>
				<br />
				<span className="product-name">{name}</span>
				<br />
				<span className="price">₱{price}</span>
			{/* </center> */}
		</div>
	);
}

export default Products;

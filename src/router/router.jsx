import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import ChipCatalog from '../pages/ChipCatalog/ChipCatalog'
import AutoCatalog from '../pages/AutoCatalog/AutoCatalog'
import ElektroCatalog from '../pages/ElektroCatalog/ElektroCatalog'


const router = createBrowserRouter([
	{
		element: <Layout/>,
		path: '/',
		children: [
			{element: <Home/>, path: ''},
			{element: <Product/>, path: 'product'},
			{element: <ChipCatalog/>, path: 'catalog/chip'},
			{element: <AutoCatalog/>, path: 'catalog/auto'},
			{element: <ElektroCatalog/>, path: 'catalog/elektro'}
		]
	}
])
export default router
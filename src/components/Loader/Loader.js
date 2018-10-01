import React from 'react';
import ContentLoader from "react-content-loader";


const MyLoader = props => (
	<ContentLoader 
		height={145}
		width={494}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#b0b0b0"
		{...props}
	>
		<rect x="6.5" y="9.2" rx="4" ry="4" width="222.3" height="12.16" /> 
		<rect x="9.01" y="34.53" rx="3" ry="3" width="163.2" height="12.29" /> 
		<rect x="7" y="57.48" rx="3" ry="3" width="280" height="5.12" /> 
		<rect x="5" y="80.4" rx="3" ry="3" width="285" height="4.8" />
	</ContentLoader>
)

export default MyLoader
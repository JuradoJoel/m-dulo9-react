import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Route, Routes } from 'react-router-dom';

function ContentRowTop() {
	return (
		<React.Fragment>
			
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
		
				
				<Routes>
					<Route path="/" element={<ContentRowMovies />} />
					<Route path="/lastmovies" element={<LastMovieInDb />} />
					<Route path="/genres" element={<GenresInDb />} />
					<Route path="/movies" element={<Chart />} />
					<Route path="*" element={
						<div>
							Error
						</div>}
						/>
				</Routes>

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;
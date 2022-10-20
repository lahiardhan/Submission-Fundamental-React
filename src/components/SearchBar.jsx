import React from 'react';
import PropTyes from 'prop-types';

function SearchBar({ onSearch }) {
  	return (
		<section className="search-bar">
			<input type="text" placeholder="Cari berdasarkan judul ..." onChange={(e) => onSearch(e.target.value)} />
		</section>
  )
}

SearchBar.propTypes = {
	onSearch: PropTyes.func.isRequired,
}

export default SearchBar;
import {useState, useEffect} from 'react';

// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
      try {
        setError(false);
        setLoading(true);

        let movies = await API.fetchMovies(searchTerm, page);
        movies = movies.data;
        setState((prev) => ({
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    // Initial Render of Home Compnent && search
    // useEffect triggers each time searchTerm changes
    useEffect(() => {
      setState(initialState);
      fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
      if (!isLoadingMore) return;

      fetchMovies(state.page + 1, searchTerm);
      setIsLoadingMore(false);
      
    }, [isLoadingMore, searchTerm, state.page]);

    return {
      state, 
      loading, 
      error, 
      searchTerm, 
      setSearchTerm,
      setIsLoadingMore
    };
}
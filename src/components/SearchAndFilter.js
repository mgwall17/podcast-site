import { useState } from 'react';
import {
  Box,
  Input,
  Select,
  HStack,
  VStack,
  Button,
  Text,
  Badge,
  Wrap,
  WrapItem,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  sortOrder,
  onSortOrderChange,
  filters,
  onFilterChange,
  filterOptions,
  resultCount,
  onClearFilters,
  type = 'episodes' // 'episodes' or 'blog'
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const episodeSortOptions = [
    { value: 'date', label: 'Publish Date' },
    { value: 'episode', label: 'Episode Number' },
    { value: 'title', label: 'Title' },
    { value: 'scare', label: 'Scare Level' }
  ];

  const blogSortOptions = [
    { value: 'date', label: 'Publish Date' },
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'readTime', label: 'Read Time' }
  ];

  const sortOptions = type === 'episodes' ? episodeSortOptions : blogSortOptions;

  const hasActiveFilters = () => {
    return Object.values(filters).some(value => 
      value && value !== 'all' && value !== ''
    );
  };

  return (
    <Box bg="gray.800" p={4} borderRadius="lg" mb={6}>
      <VStack spacing={4} align="stretch">
        {/* Search Bar */}
        <FormControl>
          <FormLabel htmlFor="search-input" srOnly>
            Search {type}
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              id="search-input"
              placeholder={`Search ${type}...`}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              bg="gray.700"
              color="white"
              _placeholder={{ color: "gray.400" }}
              aria-label={`Search ${type} by title, description, or keywords`}
            />
          </InputGroup>
        </FormControl>

        {/* Sort and Basic Filters */}
        <HStack spacing={4} wrap="wrap">
          <FormControl maxW="200px">
            <FormLabel htmlFor="sort-select" fontSize="sm">
              Sort by
            </FormLabel>
            <Select
              id="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              bg="gray.700"
              color="white"
              size="sm"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl maxW="120px">
            <FormLabel htmlFor="order-select" fontSize="sm">
              Order
            </FormLabel>
            <Select
              id="order-select"
              value={sortOrder}
              onChange={(e) => onSortOrderChange(e.target.value)}
              bg="gray.700"
              color="white"
              size="sm"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </Select>
          </FormControl>

          {/* Episode-specific filters */}
          {type === 'episodes' && (
            <>
              <FormControl maxW="150px">
                <FormLabel htmlFor="status-filter" fontSize="sm">
                  Status
                </FormLabel>
                <Select
                  id="status-filter"
                  value={filters.status || 'all'}
                  onChange={(e) => onFilterChange('status', e.target.value)}
                  bg="gray.700"
                  color="white"
                  size="sm"
                >
                  <option value="all">All Episodes</option>
                  <option value="published">Live</option>
                  <option value="upcoming">Upcoming</option>
                </Select>
              </FormControl>

              <FormControl maxW="150px">
                <FormLabel htmlFor="genre-filter" fontSize="sm">
                  Genre
                </FormLabel>
                <Select
                  id="genre-filter"
                  value={filters.genre || 'all'}
                  onChange={(e) => onFilterChange('genre', e.target.value)}
                  bg="gray.700"
                  color="white"
                  size="sm"
                >
                  <option value="all">All Genres</option>
                  {filterOptions.genres?.map(genre => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </>
          )}

          {/* Blog-specific filters */}
          {type === 'blog' && (
            <>
              <FormControl maxW="150px">
                <FormLabel htmlFor="category-filter" fontSize="sm">
                  Category
                </FormLabel>
                <Select
                  id="category-filter"
                  value={filters.category || 'all'}
                  onChange={(e) => onFilterChange('category', e.target.value)}
                  bg="gray.700"
                  color="white"
                  size="sm"
                >
                  <option value="all">All Categories</option>
                  {filterOptions.categories?.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl maxW="150px">
                <FormLabel htmlFor="tag-filter" fontSize="sm">
                  Tag
                </FormLabel>
                <Select
                  id="tag-filter"
                  value={filters.tag || 'all'}
                  onChange={(e) => onFilterChange('tag', e.target.value)}
                  bg="gray.700"
                  color="white"
                  size="sm"
                >
                  <option value="all">All Tags</option>
                  {filterOptions.tags?.map(tag => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </HStack>

        {/* Results and Clear Filters */}
        <HStack justify="space-between" align="center">
          <Text fontSize="sm" color="gray.400">
            {resultCount} {type} found
          </Text>
          
          {hasActiveFilters() && (
            <Button
              size="sm"
              variant="ghost"
              colorScheme="purple"
              onClick={onClearFilters}
              aria-label="Clear all filters"
            >
              Clear Filters
            </Button>
          )}
        </HStack>

        {/* Active Filters Display */}
        {hasActiveFilters() && (
          <Box>
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Active Filters:
            </Text>
            <Wrap>
              {Object.entries(filters).map(([key, value]) => {
                if (!value || value === 'all' || value === '') return null;
                return (
                  <WrapItem key={key}>
                    <Badge
                      colorScheme="purple"
                      variant="subtle"
                      cursor="pointer"
                      onClick={() => onFilterChange(key, 'all')}
                      title={`Remove ${key} filter`}
                    >
                      {key}: {value} ×
                    </Badge>
                  </WrapItem>
                );
              })}
            </Wrap>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SearchAndFilter;

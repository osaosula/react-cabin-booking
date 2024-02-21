/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    //Changed from props.active
    props.active === "true" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
function Filter({ filterField, filterOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOption =
    searchParams.get(filterField) || filterOptions.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {filterOptions.map((filter) => (
        <FilterButton
          onClick={() => handleClick(filter.value)}
          key={filter.value}
          active={(currentOption === filter.value).toString()}
          disabled={currentOption === filter.value}
          //active={currentOption === filter.value} use string value instead of this
        >
          {filter.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;

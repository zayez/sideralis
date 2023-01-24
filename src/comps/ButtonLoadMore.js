const ButtonLoadMore = ({ onClick }) => {
  return (
    <div className="load-more-container">
      <button className="btn btn-load-more" onClick={onClick}>
        Load more
      </button>
    </div>
  )
}

export default ButtonLoadMore

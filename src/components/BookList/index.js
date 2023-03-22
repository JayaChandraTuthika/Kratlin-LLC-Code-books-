import BooksContext from '../../context/BooksContext'

import './index.css'

const BookList = props => {
  const openForm = () => {
    const {history} = props
    history.push('add-book')
  }
  return (
    <BooksContext.Consumer>
      {value => {
        const {booksList} = value
        return (
          <div className="books-list-bg-container">
            <h1>Books List</h1>
            <ul>
              {booksList.map(each => (
                <li key={each.name}>
                  <p>{each.name}</p>
                  <p>{each.author}</p>
                  <p>{each.pages}</p>
                </li>
              ))}
            </ul>
            <button onClick={openForm} type="button">
              Add a Book
            </button>
          </div>
        )
      }}
    </BooksContext.Consumer>
  )
}
export default BookList

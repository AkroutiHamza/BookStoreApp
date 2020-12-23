
package  com.bookstore.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.bookstore.Repository.BookRepository;
import com.bookstore.service.entities.Book;

public class BookServiceTest {
	
	
	@Mock
	private BookRepository<Book> BookRepo;
	
	@InjectMocks
	private BookService bookService;
	
	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testFindAll() {
		List<Book> books = new ArrayList<Book>();
		books.add(new Book(252,"Core Java","cay Horstmann",50.00,"20/11/2020",33,0));
		books.add(new Book(3245,"Core Java","author3",63.02,"20/12/2020",93,0));
		books.add(new Book(255,"Core Java","cay Horstman",81.9,"20/12/2020",4,0));
		books.add(new Book(3245,"Core Java","cay Horstman",63.02,"20/12/2020",93,0));
		when(this.BookRepo.find()).thenReturn(books);
		assertTrue("Verify the size !!!! ",this.bookService.findAll().size() == books.size());
	}

	@Test
	public void testFindById() {
		Book book = new Book(4,"Core Java","cay Horstman",63.02,"20/12/2020",93,0);
		int id = book.getId();
		when(BookRepo.findById(id)).thenReturn(book);
		assertEquals(4,book.getId());
		assertTrue(" No matching Book ID",this.bookService.findOne(id) == book);
	}

	@Test
	public void testAddBook() {
	Book book = new Book(5658,"Core Java","cay Horstman",66.02,"20/12/2020",93,0);
		bookService.save(book);
        verify(BookRepo, times(1)).save(book);
		}
	
	@Test
	public void testUpdateBookSuccessfully() {
	Book book = new Book(5878,"Core Java","cay Horstman",66.02,"20/12/2020",93,0);
		bookService.update(book);
        verify(BookRepo, times(1)).update(book);
		}
	

	@Test
	public void testDeleteBookSuccessfully() {
		Book book = new Book(2536,"Core Java","cay Horstman",66.02,"20/12/2020",93,0);
		bookService.delete(book);
        verify(BookRepo, times(1)).delete(book);
		}
	}

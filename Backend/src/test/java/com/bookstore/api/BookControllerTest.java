package com.bookstore.controllers;

import org.junit.Test;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import org.junit.Before;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.bookstore.Service.BookService;
import com.bookstore.entities.Book;

import static org.hamcrest.Matchers.*;

public class BookControllerTest {
	

		
		@Autowired
		private MockMvc mockMvc;

		@Mock
		private BookService MockedBookService;

		@InjectMocks
		private BookController bookController;

		@Before
		public void setup() throws Exception {
			MockitoAnnotations.initMocks(this);
			mockMvc = MockMvcBuilders.standaloneSetup(bookController).build();
		}

		@Test
		public void testGetAllBooks() throws Exception {
			List <Book> books = new ArrayList<Book>();
		books.add(new Book(252,"Core Java","cay Horstmann",50.00,"20/11/2020",33,0));
		books.add(new Book(3245,"Core Java","author3",63.02,"20/12/2020",93,0));
		books.add(new Book(255,"Core Java","cay Horstman",81.9,"20/12/2020",4,0));
			
			when(MockedBookService.find()).thenReturn(books);

			this.mockMvc.perform(get("/book"))
			.andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(1)))
			.andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(3)))
			.andExpect(status().is2xxSuccessful());
			
		}

		@Test
		public void testGetBook() throws Exception {
		books.add(new Book(252,"Core Java","cay Horstmann",50.00,"20/11/2020",33,0));
			when(MockedBookService.findById(1)).thenReturn(book);
			this.mockMvc.perform(get("/book/{id}", 1))
			.andExpect(MockMvcResultMatchers.jsonPath("$.id").value(4))
			.andExpect(status().is2xxSuccessful());
		}


}
package com.bookstore.api;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created By Hamza Akrouti on 23/12/2020.
 */
public class CartControllerTest {

    @Autowired                           
    private MockMvc mockMvc;

	@MockBean
	CartService cartService;
	@MockBean 
	UserService userService;
    @MockBean 
	BookService bookService;
    @MockBean 
	BookInOrderService bookInOrderService;
	@MockBean 
	BookInOrderRepository bookInOrderRepository;



    @Test
    public void getCart() throws Exception {

    given(userService.findOne("Customer1")).willReturn(data);

    mockMvc.perform(get('/cart/')).contentType(MediaType.APPLICATION_JSON)
    .andExpect(Status().isok())
    .andExpect(jsonPath("$", hasSize(1))));

    }




    @Test
    public void checkout() throws Exception {

    given(userService.findOne("Customer1")).willReturn(data);

    mockMvc.perform(get('/cart/checkout')).contentType(MediaType.APPLICATION_JSON)
    .andExpect(Status().isok())
    .andExpect(jsonPath("$", hasSize(1))));
    
    }
}
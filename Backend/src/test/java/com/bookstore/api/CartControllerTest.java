package me.zhulin.shopapi.api;

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
    public void getCart() {





    }
}
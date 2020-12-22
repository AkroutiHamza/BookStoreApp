
package com.bookstore.auth.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Created By AkroutiHamza  on 22/12/2020.
 */


@Data
public class LoginForm {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
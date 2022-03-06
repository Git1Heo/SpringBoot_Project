package com.project.polaroid.controller;

import com.project.polaroid.dto.FollowAddDTO;
import com.project.polaroid.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    @PostMapping("/member/followAdd")
    public @ResponseBody String followAdd(@ModelAttribute FollowAddDTO followAdd){
        System.out.println("FollowController.followAdd");
        System.out.println("followAdd = " + followAdd);
        String result=followService.followAdd(followAdd);
        System.out.println("result = " + result);
        return result;
    }
}

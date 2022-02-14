package com.project.polaroid.controller;

import com.project.polaroid.auth.PrincipalDetails;
import com.project.polaroid.dto.MemberAddInfo;
import com.project.polaroid.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/addInfo")
    public String addInfoForm(){
        return "member/addInfo";
    }

    @PostMapping("/addInfo")
    public String addInfo(@ModelAttribute MemberAddInfo memberAddInfo,
                          @AuthenticationPrincipal PrincipalDetails principalDetails){
        System.out.println("principalDetails.getMember().getId() = " + principalDetails.getMember().getId());
        memberService.memberAddInfo(memberAddInfo,principalDetails.getMember().getId());
        return "index";
    }
}

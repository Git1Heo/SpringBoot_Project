package com.project.polaroid.service;

import java.util.ArrayList;
import java.util.HashMap;

public interface FollowService {

    // 팔로워 팔로잉 카운트
    ArrayList<Integer> followCount(Long memberId);
}

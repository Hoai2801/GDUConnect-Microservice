package com.GDUConnect.postservice.Service;

import com.GDUConnect.postservice.DTO.LikeDTO;
import com.GDUConnect.postservice.Model.LikeModel;
import com.GDUConnect.postservice.Model.PostModel;
import com.GDUConnect.postservice.Repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class LikeService {
    private final LikeRepository likeRepository;
    private final PostService postService;

    public ResponseEntity<?> likePostWithId(LikeDTO likeDTO) {
        PostModel existingPost = postService.getPostWithId((long) likeDTO.getPostId());
        LikeModel existingLikeModel = likeRepository.findByUserIdAndPostId(likeDTO.getUserId(), existingPost);
        if (existingPost != null && existingLikeModel == null) {
            LikeModel likeModel = LikeModel.builder()
                    .postId(existingPost)
                    .userId(likeDTO.getUserId())
                    .build();
            likeRepository.save(likeModel);
            return ResponseEntity.ok().body("like post successfully");
        }
        return ResponseEntity.badRequest().body("like post not successfully");
    }

    public ResponseEntity<?> unlikePostWithId(LikeDTO likeDTO) {
        PostModel existingPost = postService.getPostWithId((long) likeDTO.getPostId());
        LikeModel existingLikeModel = likeRepository.findByUserIdAndPostId(likeDTO.getUserId(), existingPost);
        if (existingLikeModel != null && existingPost != null) {
            likeRepository.delete(existingLikeModel);
            return ResponseEntity.ok().body("unlike post successfully");
        }
        return ResponseEntity.badRequest().body("post not existing");
    }
}

package com.GDUConnect.postservice.Service;

import com.GDUConnect.postservice.DTO.PostDTO;
import com.cloudinary.Cloudinary;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Map;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class PostService{
    private final Cloudinary cloudinary;
    public String createPost(PostDTO postDTO) throws IOException {
        return cloudinary.uploader()
                .upload(postDTO.getFile().getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("url")
                .toString();
    }
}

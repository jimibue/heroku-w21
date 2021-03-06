class Api::MemesController < ApplicationController

    def index
     Thing.all
     render json: Meme.all
    end

    def create
        file = params[:file]
        if(file)
            begin
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resources_type: 'auto')
            rescue => e
                render json: {errors: e}, status: 435
                return
            end
        end
      
        # succefully added to cloudinary try to save Meme to our db
        meme = Meme.new(title: params[:title], image_url:cloud_image['secure_url'] )
        if(meme.save)
            render json: meme
        else
            render json: {errors: meme.errors}, status: 422
        end
    end  
    
    def create_url
        meme = Meme.new(title: params[:title], image_url:params['image_url'] )
        if(meme.save)
            render json: meme
        else
            render json: {errors: meme.errors}, status: 422
        end
    end
end

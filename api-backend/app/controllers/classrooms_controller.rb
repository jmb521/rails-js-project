class ClassroomsController < ApplicationController

    def create
        classroom = Classroom.create(classroom_params)
        if classroom.valid?
            render json: classroom
        else
            render json: {error: "Classroom not valid"}
        end
    end

    def show
        # binding.pry
        classroom = Classroom.find(params[:id])
        render json: classroom
    end

    def index
        classroom = Classroom.all
        render json: classroom
    end

    private

    def classroom_params
        params.require(:classroom).permit(:name)
    end

end

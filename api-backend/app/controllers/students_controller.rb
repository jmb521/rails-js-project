class StudentsController < ApplicationController

    def create
        # binding.pry
        @student = Student.create(student_params)
        if @student.valid?
            render json: @student
        else
            render json: {error: "The student was not created"}
        end
    end

    def destroy
        # binding.pry 
        @student = Student.find_by(id: params[:id])
        if @student
            @student.delete
            render json: @student
        else
            render json: {error: "The delete didn't work"}
        end
    end


    private

    def student_params
        params.require(:student).permit(:id, :first_name, :last_name, :classroom_id)
    end
end

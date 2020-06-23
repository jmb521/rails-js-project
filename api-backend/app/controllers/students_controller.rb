class StudentsController < ApplicationController

    def create

    end


    private

    def student_params
        params.require(:student).permit(:first_name, :last_name, :classroom_id)
    end
end

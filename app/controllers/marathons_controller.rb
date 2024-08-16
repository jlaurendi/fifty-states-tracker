class MarathonsController < ApplicationController

    def index
        @marathons = Marathon.all
    end
end

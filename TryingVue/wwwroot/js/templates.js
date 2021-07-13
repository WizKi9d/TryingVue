var advertTemplate = `<div class="container">
                        <div class="card my-5" style="max-width: 800px; max-height: 30rem;">
                        <div>
                            <div class="row g-0">
                                <div class="col-md-5 pr-0">
                                    <img v-bind:src="advert.img" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-7 pl-0">
                                    <div class="card-body">
                                        <h4 class="card-title" style="color: #1b6ec2;">{{ advert.title }}</h4>
                                        <h6>{{ advert.distance + " away" }}</h6>
                                        <p class="mt-4 card-text">{{ advert.description }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-md-5 pr-0">
                                    <div class="card-footer" style="background-color: #0499a8;">
                                        <h5 class="card-text" style="color: white">{{ "£" + advert.price }}</h5>
                                    </div>
                                </div>
                                <div class="col-md-7 pl-0">
                                    <div class="card-footer" style="border-top: 1px solid #cccccc">
                                        <div>
                                            <p class="card-text"><small class="text-muted">{{ "Agent: " + advert.agent }}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div v-if="advert.displayAd">
                            <display-ad-template></display-ad-template>
                        </div>
                    </div>` 

var displayAdTemplate = `<div class="card" style="max-width: 800px;">
                                <div class="card-body p-0" style="height: 7rem">
                                    <img src="../img/property3.jpg" alt="..." style="width: 100%; height: 100%; display: block; object-fit: cover; opacity: 0.9;"/>
                                    <div class="centered">Find the right property for you</div>
                                </div>
                            </div>`

var infoBox = `<div class="card my-5">
                    <div class="card-footer" style="height: 20rem">
                        <h5 class="card-title pb-2">{{ infoBox.title }}</h5>
                        <p class="card-text">{{ infoBox.text }}</p>
                    </div>
                </div>`
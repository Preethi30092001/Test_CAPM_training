sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'preethi/po/managepo/test/integration/FirstJourney',
		'preethi/po/managepo/test/integration/pages/POsList',
		'preethi/po/managepo/test/integration/pages/POsObjectPage',
		'preethi/po/managepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('preethi/po/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
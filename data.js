var APP_DATA = {
  "scenes": [
    {
      "id": "0-sephora_zew",
      "name": "sephora_zew",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.4209310635606709,
        "pitch": 0.028919482583567913,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.37672396447822365,
          "pitch": 0.035824448107456774,
          "rotation": 0,
          "target": "1-sephora_wew_1"
        },
        {
          "yaw": -0.49761373635109685,
          "pitch": 0.04191711917273189,
          "rotation": 0,
          "target": "2-sephora_wew_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sephora_wew_1",
      "name": "sephora_wew_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004017382847635531,
          "pitch": 0.09352969308403658,
          "rotation": 0,
          "target": "2-sephora_wew_2"
        },
        {
          "yaw": -2.4271010450924795,
          "pitch": 0.16774995655569214,
          "rotation": 0,
          "target": "0-sephora_zew"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sephora_wew_2",
      "name": "sephora_wew_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.405535954011924,
          "pitch": 0.18451913398979158,
          "rotation": 0,
          "target": "0-sephora_zew"
        },
        {
          "yaw": -3.1088135477032868,
          "pitch": 0.13276738175350644,
          "rotation": 0,
          "target": "1-sephora_wew_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

# Copyright (c) Facebook, Inc. and its affiliates.

import unittest

import torch
from mmf.models.vilt import ViLTImageEmbedding, ViLTTextEmbedding
from omegaconf import OmegaConf
from tests.test_utils import skip_if_old_transformers
from torch import nn


@skip_if_old_transformers(min_version="4.5.0")
class TestViltEmbeddings(unittest.TestCase):
    def test_vilt_image_embedding(self):
        config = OmegaConf.structured(ViLTImageEmbedding.Config())
        embedding = ViLTImageEmbedding(**config)
        self.assertTrue(isinstance(embedding, nn.Module))

        image = torch.rand(32, 3, 224, 224)
        output = embedding(image)
        self.assertEqual(output.shape, torch.Size([32, 197, 768]))

    def test_vilt_image_embedding_pretrained(self):
        config = OmegaConf.structured(ViLTImageEmbedding.Config())
        config.random_init = False
        config.patch_size = 32
        config.pretrained_model_name = "google/vit-base-patch32-384"
        config.image_size = [384, 384]

        embedding = ViLTImageEmbedding(**config)
        self.assertTrue(isinstance(embedding, nn.Module))

        image = torch.rand(32, 3, 384, 384)
        output = embedding(image)
        self.assertEqual(output.shape, torch.Size([32, 145, 768]))

    def test_vilt_text_embedding(self):
        config = OmegaConf.structured(ViLTTextEmbedding.Config())
        embedding = ViLTTextEmbedding(**config)
        self.assertTrue(isinstance(embedding, nn.Module))

        input_ids = torch.ones(32, 25).long()
        segment_ids = torch.ones(32, 25).long()

        output = embedding(input_ids, segment_ids)
        self.assertEqual(output.shape, torch.Size([32, 25, 768]))
